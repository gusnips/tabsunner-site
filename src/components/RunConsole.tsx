import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

/**
 * A simulated agent run, Claude Code-style: plan, tool calls, live elapsed
 * time and token spend. Labelled as a demo — it proves the interface, not a
 * fake result. One clock drives everything; reduced motion gets the finished
 * state, which is still the honest summary of a run.
 */

const CYCLE_MS = 12_000;
const PLAN_AT = 1_400;
const STEP_DONE_AT = [2_600, 4_200, 5_800, 9_200];
const TOOL_AT = [2_600, 4_200, 5_800];
const COMPOSING_AT = 7_400;
const DONE_AT = 9_200;

function formatElapsed(ms: number): string {
  return `${(ms / 1000).toFixed(1)}s`;
}

export function RunConsole() {
  const { t } = useTranslation();
  const plan = t("run.plan", { returnObjects: true }) as string[];
  const tools = t("run.tools", { returnObjects: true }) as Array<{ tool: string; detail: string }>;
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTick(DONE_AT + 1); // the finished run, static
      return;
    }
    let start = performance.now();
    const id = setInterval(() => {
      setTick((performance.now() - start) % CYCLE_MS);
    }, 100);
    const onVisibility = () => {
      if (!document.hidden) start = performance.now();
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      clearInterval(id);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  const done = tick >= DONE_AT;
  const composing = tick >= COMPOSING_AT && !done;
  const planning = tick >= PLAN_AT - 200 && tick < PLAN_AT;
  const tokens = Math.min(3_840, Math.floor(tick / 50) * 24);

  return (
    <div
      className="min-w-0 rounded-2xl border border-field-500/60 bg-field-800/70 shadow-[0_0_48px_-12px] shadow-ion-500/25 backdrop-blur-sm"
      role="img"
      aria-label={`${t("run.demoBadge")}: ${t("run.task")}`}
    >
      {/* header: the run's identity */}
      <div className="flex items-center gap-3 border-b border-field-600/60 px-5 py-3.5">
        <span
          className={`size-2 shrink-0 rounded-full ${
            done ? "bg-ion-400" : "live-dot bg-tel-400"
          }`}
          aria-hidden="true"
        />
        <p className="min-w-0 flex-1 truncate text-sm text-star-100">
          <span className="mr-2 font-mono text-[11px] tracking-wider text-star-500 uppercase">
            {t("run.taskLabel")}
          </span>
          {t("run.task")}
        </p>
        <span className="shrink-0 rounded-full border border-tel-400/40 px-2 py-0.5 font-mono text-[10px] tracking-wider text-tel-300 uppercase">
          {t("run.demoBadge")}
        </span>
      </div>

      <div className="space-y-4 px-5 py-4">
        {/* status line */}
        <p className="font-mono text-sm">
          {planning && <span className="shimmer-text">{t("run.planning")}</span>}
          {composing && <span className="shimmer-text">{t("run.composing")}</span>}
          {done && <span className="text-ion-300">{t("run.done")}</span>}
          {!planning && !composing && !done && (
            <span className="shimmer-text">
              {plan[
                STEP_DONE_AT.findIndex((at) => tick < at)
              ]?.toLowerCase() ?? t("run.planning")}
            </span>
          )}
        </p>

        {/* plan */}
        {tick >= PLAN_AT && (
          <div>
            <p className="font-mono text-[11px] tracking-wider text-star-500 uppercase">
              {t("run.planTitle")}
            </p>
            <ol className="mt-1.5 space-y-1">
              {plan.map((step, i) => {
                const isDone = tick >= STEP_DONE_AT[i];
                const isActive = !isDone && (i === 0 || tick >= STEP_DONE_AT[i - 1]);
                return (
                  <li key={step} className="flex items-center gap-2 text-sm">
                    <span
                      aria-hidden="true"
                      className={`font-mono text-xs ${isDone ? "text-ion-400" : isActive ? "text-tel-400" : "text-star-500"}`}
                    >
                      {isDone ? "✓" : isActive ? "▸" : "·"}
                    </span>
                    <span className={isDone ? "text-star-500 line-through" : isActive ? "text-star-100" : "text-star-500"}>
                      {step}
                    </span>
                  </li>
                );
              })}
            </ol>
          </div>
        )}

        {/* tool calls */}
        <div className="space-y-1 font-mono text-xs" aria-hidden="true">
          {tools.map((line, i) =>
            tick >= TOOL_AT[i] ? (
              <p key={line.tool}>
                <span className="text-ion-400">{line.tool}</span>{" "}
                <span className="text-star-500">{line.detail}</span>
              </p>
            ) : null,
          )}
        </div>
      </div>

      {/* telemetry: amber measures */}
      <div className="flex items-center justify-between border-t border-field-600/60 px-5 py-3 font-mono text-xs text-tel-300">
        <span className="tnum">
          {formatElapsed(Math.min(tick, DONE_AT))} {t("run.elapsed")}
        </span>
        <span className="tnum">
          {tokens.toLocaleString()} {t("run.tokens")}
        </span>
      </div>
    </div>
  );
}
