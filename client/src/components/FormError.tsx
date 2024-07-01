// import { Erro} from "lucide-react"

interface FormErrorProps {
  message?: string;
}

export const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;
  return (
    <div className="bg-destructive/15 p-3 rounded-md flex items-centergap-x-2 text-sm text-destructive">
      <p>{message}</p>
    </div>
  );
};
