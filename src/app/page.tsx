import { Container } from "@/ui/container";
import { CreateUser } from "./ui/create-user";

export default function Home() {
  return (
    <>
      <Container>
        <div className="w-[360px] mx-auto mt-32">
          <CreateUser />
        </div>
      </Container>
    </>
  );
}
