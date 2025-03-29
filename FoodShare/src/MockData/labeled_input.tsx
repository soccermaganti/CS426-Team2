const LabeledInput = ({ label, type, placeholder, value, setValue }: { 
    label: string; 
    type: string;
    placeholder: string;
    value: string;
    setValue: (val: string) => void;
}) => (
    <label>
        {label}: 
        <input 
            type={type} 
            placeholder={placeholder} 
            value={value} 
            onChange={(e) => setValue(e.target.value)} 
        />
    </label>
);

export { LabeledInput }