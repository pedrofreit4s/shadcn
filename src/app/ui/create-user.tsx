import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function CreateUser() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Criar um novo usuário</CardTitle>
        <CardDescription>Crie um novo usuário para o sistema.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" action="">
          <div className="flex flex-col gap-2">
            <Label>Nome completo</Label>
            <Input type="text" placeholder="Seu nome completo" />
          </div>
          <div className="flex flex-col gap-2">
            <Label>Tipo de usuário</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Grupos</SelectLabel>
                  <SelectItem value="customer">Cliente</SelectItem>
                  <SelectItem value="admin">Administrador</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  );
}
