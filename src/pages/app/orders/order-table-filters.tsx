import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, X } from "lucide-react";

export function OrderTableFilters() {
  return (
    <form action="" className="flex items-center gap-2">
      <span className="text-sm font-semibold">Filtros:</span>
      <Input placeholder="Id do pedido" className="h-8 w-auto" />
      <Input placeholder="Nome do Cliente" className="h-8 w-[320px]" />
      <Select defaultValue="all">
        <SelectTrigger className="h-8 w-[180px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todos Status</SelectItem>
          <SelectItem value="Pending">Pendente</SelectItem>
          <SelectItem value="Canceld">Cancelado</SelectItem>
          <SelectItem value="Processing">Em preparo</SelectItem>
          <SelectItem value="Delivering">Em entrega</SelectItem>
          <SelectItem value="Deliverd">Entregue</SelectItem>
        </SelectContent>
      </Select>
      <Button type="submit" variant="secondary" size="xs">
        <Search className="mr-2 size-4" />
        Filtrar resultados
      </Button>
      <Button type="button" variant="outline" size="xs">
        <X className="mr-2 size-4" />
        remover filtros
      </Button>
    </form>
  );
}
