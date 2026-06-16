import { cn } from '@/lib/utils';

export function GlassCard({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-xl",
        "shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition-all duration-500 hover:border-white/10 hover:bg-white/[0.04] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(59,130,246,0.1)]",
        className
      )}
      {...props}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
