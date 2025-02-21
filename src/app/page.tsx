import { ArrowRight, Copy } from "lucide-react";

import { Button, IconButton } from "@/components";

export default function Home() {
  return (
    <main>
      <Button type="button">
        Enviar <ArrowRight />
      </Button>

      <IconButton>
        <Copy />
      </IconButton>
    </main>
  );
}
