"use client";
// import Chip from "@/components/Chip";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-y-4">
      {/* <Chip intent="primary" label="Primary" />
      <Chip intent="secondary" label="Secondary" />
      <Chip intent="danger" label="Danger" />
      <Chip intent="warning" label="Warning" />
      <Chip intent="info" label="Info" />
      <Chip label="Default" /> */}
      <Button intent="primary" size="lg">
        Primary
      </Button>
      <Button intent="primary" size="lg" variant="outline">
        Primary
      </Button>
      <Button intent="primary" size="md">
        Primary
      </Button>
      <Button intent="primary" size="sm">
        Primary
      </Button>
      <Button intent="secondary" size="lg">
        Secondary
      </Button>
      <Button intent="secondary" size="lg" variant="outline">
        Secondary
      </Button>
      <Button intent="secondary" size="md">
        Secondary
      </Button>
      <Button intent="secondary" size="sm">
        Secondary
      </Button>
      <Button intent="danger" size="lg">
        Danger
      </Button>
      <Button intent="danger" size="lg" variant="outline">
        Danger
      </Button>
      <Button intent="danger" size="md">
        Danger
      </Button>
      <Button intent="danger" size="sm">
        Danger
      </Button>
    </div>
  );
}
