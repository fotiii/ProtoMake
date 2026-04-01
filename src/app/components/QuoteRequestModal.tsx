import { useEffect, useState, type FormEvent } from 'react';

type QuoteDefaults = {
  productName?: string;
  carBrand?: string;
  quantity?: string;
};

type QuoteRequestModalProps = {
  isOpen: boolean;
  onClose: () => void;
  defaults?: QuoteDefaults | null;
};

const initialForm = {
  name: '',
  phone: '',
  contactMethod: 'phone',
  carBrand: '',
  productName: '',
  quantity: '1',
  urgency: 'standard',
  hasSample: 'yes',
  notes: '',
};

export function QuoteRequestModal({ isOpen, onClose, defaults }: QuoteRequestModalProps) {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [requestId, setRequestId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [deliveredTo, setDeliveredTo] = useState<string[]>([]);
  const [partialFailure, setPartialFailure] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const nextForm = {
      ...initialForm,
      carBrand: defaults?.carBrand ?? '',
      productName: defaults?.productName ?? '',
      quantity: defaults?.quantity ?? '1',
    };

    setForm(nextForm);
    setSubmitted(false);
    setRequestId('');
    setSubmitError('');
    setIsSubmitting(false);
    setDeliveredTo([]);
    setPartialFailure(false);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [defaults, isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const handleChange = (field: keyof typeof initialForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('/api/quote-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...form,
          sourcePage: window.location.pathname,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        throw new Error(data.message || 'Не удалось отправить заявку.');
      }

      setRequestId(data.requestId ?? '');
      setDeliveredTo(Array.isArray(data.deliveredTo) ? data.deliveredTo : []);
      setPartialFailure(Boolean(data.partialFailure));
      setSubmitted(true);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Не удалось отправить заявку. Попробуйте ещё раз.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-md" onClick={onClose}>
      <div
        className="grid max-h-[95vh] w-full max-w-6xl overflow-hidden rounded-[2rem] bg-[#f5f1e8] shadow-2xl lg:grid-cols-[1.05fr_0.95fr]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative overflow-y-auto bg-[#111111] p-8 text-white lg:p-10">
          <button
            type="button"
            className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white transition-colors hover:border-[#f8cd02] hover:text-[#f8cd02]"
            onClick={onClose}
            aria-label="Закрыть форму"
          >
            ×
          </button>

          <p className="mb-3 text-sm uppercase tracking-[0.24em] text-[#f8cd02]">Форма расчёта</p>
          <h2 className="max-w-md text-3xl font-bold leading-tight lg:text-4xl">
            Чем точнее вводные, тем быстрее мы скажем срок, материал и цену.
          </h2>
          <p className="mt-4 max-w-lg text-gray-300">
            Заполните форму в спокойном темпе. Даже если у вас пока нет всех размеров, всё равно можно отправить предварительную заявку.
          </p>

          <div className="mt-10 space-y-4">
            {[
              'Фото детали или место установки',
              'Размеры, артикул или VIN, если есть',
              'Количество и желаемый срок',
            ].map((item, index) => (
              <div key={item} className="flex items-start gap-4 rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#f8cd02] font-semibold text-[#111111]">
                  0{index + 1}
                </div>
                <p className="pt-2 text-sm text-gray-200">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-gray-300">Для срочных задач всё равно лучше позвонить: так мы сразу скажем, возможно ли изготовление без дополнительных замеров.</p>
            <a href="tel:+79237496588" className="mt-4 inline-flex rounded-full bg-[#f8cd02] px-5 py-3 font-semibold text-[#111111]">
              +7 923 749-65-88
            </a>
          </div>
        </div>

        <div className="overflow-y-auto p-8 lg:p-10">
          {!submitted ? (
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-4 md:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-sm font-medium text-[#5d5547]">Ваше имя</span>
                  <input
                    value={form.name}
                    onChange={(event) => handleChange('name', event.target.value)}
                    required
                    className="w-full rounded-2xl border border-[#1e1e1e]/10 bg-white px-4 py-3 outline-none transition-colors focus:border-[#f8cd02]"
                    placeholder="Как к вам обращаться"
                  />
                </label>
                <label className="space-y-2">
                  <span className="text-sm font-medium text-[#5d5547]">Телефон</span>
                  <input
                    value={form.phone}
                    onChange={(event) => handleChange('phone', event.target.value)}
                    required
                    className="w-full rounded-2xl border border-[#1e1e1e]/10 bg-white px-4 py-3 outline-none transition-colors focus:border-[#f8cd02]"
                    placeholder="+7 900 000-00-00"
                  />
                </label>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-sm font-medium text-[#5d5547]">Марка / модель</span>
                  <input
                    value={form.carBrand}
                    onChange={(event) => handleChange('carBrand', event.target.value)}
                    className="w-full rounded-2xl border border-[#1e1e1e]/10 bg-white px-4 py-3 outline-none transition-colors focus:border-[#f8cd02]"
                    placeholder="Например: Lada Granta FL"
                  />
                </label>
                <label className="space-y-2">
                  <span className="text-sm font-medium text-[#5d5547]">Что нужно изготовить</span>
                  <input
                    value={form.productName}
                    onChange={(event) => handleChange('productName', event.target.value)}
                    required
                    className="w-full rounded-2xl border border-[#1e1e1e]/10 bg-white px-4 py-3 outline-none transition-colors focus:border-[#f8cd02]"
                    placeholder="Название детали или описание задачи"
                  />
                </label>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <label className="space-y-2">
                  <span className="text-sm font-medium text-[#5d5547]">Количество</span>
                  <input
                    value={form.quantity}
                    onChange={(event) => handleChange('quantity', event.target.value)}
                    className="w-full rounded-2xl border border-[#1e1e1e]/10 bg-white px-4 py-3 outline-none transition-colors focus:border-[#f8cd02]"
                    placeholder="1"
                  />
                </label>
                <label className="space-y-2">
                  <span className="text-sm font-medium text-[#5d5547]">Срочность</span>
                  <select
                    value={form.urgency}
                    onChange={(event) => handleChange('urgency', event.target.value)}
                    className="w-full rounded-2xl border border-[#1e1e1e]/10 bg-white px-4 py-3 outline-none transition-colors focus:border-[#f8cd02]"
                  >
                    <option value="standard">Обычный срок</option>
                    <option value="fast">Нужно срочно</option>
                    <option value="planning">Пока только расчет</option>
                  </select>
                </label>
                <label className="space-y-2">
                  <span className="text-sm font-medium text-[#5d5547]">Есть образец?</span>
                  <select
                    value={form.hasSample}
                    onChange={(event) => handleChange('hasSample', event.target.value)}
                    className="w-full rounded-2xl border border-[#1e1e1e]/10 bg-white px-4 py-3 outline-none transition-colors focus:border-[#f8cd02]"
                  >
                    <option value="yes">Да, есть старая деталь</option>
                    <option value="no">Нет, только фото / размеры</option>
                    <option value="model">Есть готовая 3D-модель</option>
                  </select>
                </label>
              </div>

              <fieldset className="space-y-2">
                <legend className="text-sm font-medium text-[#5d5547]">Как удобнее связаться</legend>
                <div className="grid gap-3 md:grid-cols-3">
                  {[
                    ['phone', 'Звонок'],
                    ['telegram', 'Telegram'],
                    ['whatsapp', 'WhatsApp'],
                  ].map(([value, label]) => (
                    <label key={value} className={`cursor-pointer rounded-2xl border px-4 py-3 transition-colors ${form.contactMethod === value ? 'border-[#f8cd02] bg-[#f8cd02]/20' : 'border-[#1e1e1e]/10 bg-white'}`}>
                      <input
                        type="radio"
                        name="contactMethod"
                        value={value}
                        checked={form.contactMethod === value}
                        onChange={(event) => handleChange('contactMethod', event.target.value)}
                        className="sr-only"
                      />
                      <span className="font-medium text-[#1e1e1e]">{label}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <label className="space-y-2">
                <span className="text-sm font-medium text-[#5d5547]">Комментарий</span>
                <textarea
                  value={form.notes}
                  onChange={(event) => handleChange('notes', event.target.value)}
                  rows={5}
                  className="w-full rounded-[1.5rem] border border-[#1e1e1e]/10 bg-white px-4 py-3 outline-none transition-colors focus:border-[#f8cd02]"
                  placeholder="Опишите задачу: где стоит деталь, что сломалось, какие размеры уже есть, нужен ли усиленный вариант."
                />
              </label>

              <div className="rounded-[1.5rem] border border-dashed border-[#1e1e1e]/15 bg-white/70 p-4 text-sm text-[#5d5547]">
                Фото и размеры вы можете отправить после формы при созвоне. На этом шаге нам достаточно ваших контактов и краткого описания задачи.
              </div>

              {submitError ? (
                <div className="rounded-[1.5rem] border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                  {submitError}
                </div>
              ) : null}

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center rounded-full bg-[#111111] px-6 py-4 text-base font-semibold text-white transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? 'Отправляем заявку...' : 'Отправить на расчёт'}
              </button>
            </form>
          ) : (
            <div className="flex h-full flex-col justify-center">
              <p className="mb-3 text-sm uppercase tracking-[0.24em] text-[#9b8d67]">Заявка отправлена</p>
              <h3 className="text-3xl font-bold text-[#111111]">Заявка ушла в рабочие каналы. Следующий шаг — быстро связаться и подтвердить детали.</h3>
              <div className="mt-8 rounded-[1.75rem] bg-white p-6 shadow-sm">
                <p className="text-sm text-[#8d8066]">Номер заявки</p>
                <p className="mt-1 text-2xl font-bold text-[#111111]">{requestId}</p>
                <div className="mt-5 space-y-2 text-sm text-[#4d4538]">
                  <p><strong>Контакт:</strong> {form.name}, {form.phone}</p>
                  <p><strong>Деталь:</strong> {form.productName}</p>
                  <p><strong>Марка / модель:</strong> {form.carBrand || 'уточняется'}</p>
                  <p><strong>Количество:</strong> {form.quantity}</p>
                </div>
              </div>
              <div className="mt-5 rounded-[1.5rem] border border-[#1e1e1e]/10 bg-white/70 p-4 text-sm text-[#4d4538]">
                <p>
                  <strong>Каналы доставки:</strong>{' '}
                  {deliveredTo.length > 0 ? deliveredTo.join(', ') : 'заявка принята'}
                </p>
                {partialFailure ? (
                  <p className="mt-2 text-[#8a5c00]">Часть каналов могла не сработать, но заявка доставлена хотя бы в один из них.</p>
                ) : null}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="tel:+79237496588"
                  className="inline-flex items-center justify-center rounded-full bg-[#f8cd02] px-6 py-3 font-semibold text-[#111111]"
                >
                  Позвонить и продиктовать заявку
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex items-center justify-center rounded-full border border-[#1e1e1e]/10 px-6 py-3 font-semibold text-[#111111]"
                >
                  Вернуться на сайт
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
