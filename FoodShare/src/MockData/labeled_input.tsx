const LabeledInput = ({ label, type, placeholder, value, setValue }: { 
    label: string; 
    type: string;
    placeholder: string;
    value: string;
    setValue: (val: string) => void;
}) => (
    <div className="flex flex-col space-y-1">
        <label className="text-green-700 font-medium">{label}</label> 
        <input 
            type={type} 
            placeholder={placeholder} 
            value={value} 
            onChange={(e) => setValue(e.target.value)} 
            className="w-full px-4 py-2 border rounded-lg bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
    </div>
    
);

export { LabeledInput }