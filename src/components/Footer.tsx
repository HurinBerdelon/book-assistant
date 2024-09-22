import Link from "next/link";

export function Footer() {
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      <span>Developed by:</span>
      <Link href="https://hurinberdelon.com">HurinBerdelon</Link>
    </footer>
  );
}
