export default function FormField({ label, name, type = 'text', value, onChange, required = false, options = null, placeholder = '' }) {
  return (
    <div>
      <label className="block text-primary text-sm font-bold mb-2">{label}</label>
      {type === 'select' ? (
        <select
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className="w-full p-4 rounded-xl border border-primary/20 focus:border-primary focus:outline-none bg-white"
        >
          {options}
        </select>
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className="w-full p-4 rounded-xl border border-primary/20 focus:border-primary focus:outline-none bg-white"
          placeholder={placeholder}
        />
      )}
    </div>
  );
}
