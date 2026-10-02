export function PrintReportHeader({
  title,
  meta,
  label,
}: {
  title: string;
  meta: string;
  label: string;
}) {
  return (
    <header className="print-only border-line-strong border-b pb-5">
      <div className="flex items-center justify-between gap-6">
        <span className="font-display text-[18px] font-extrabold">prufung.uz</span>
        <span className="text-muted-2 text-[11px] tracking-[.14em] uppercase">
          {label}
        </span>
      </div>
      <div className="mt-7 flex flex-col gap-2">
        <h1 className="font-display m-0 text-[30px] font-bold">{title}</h1>
        <span className="text-muted-3 text-[14px]">{meta}</span>
      </div>
    </header>
  );
}

export function PrintReportFooter({ note }: { note: string }) {
  return (
    <footer className="print-only border-line-strong text-muted-2 mt-7 border-t pt-4 text-[11px]">
      <div className="flex items-center justify-between gap-6">
        <span>{note}</span>
        <span>prufung.uz</span>
      </div>
    </footer>
  );
}
