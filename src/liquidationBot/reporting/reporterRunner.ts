import { Reportable, Reporter } from "@liquidationBot/reporting/types";

export async function runReporter(
  reporter: Reporter,
  reportable: Reportable
): Promise<void> {
  try {
    // potentially reporters may also export async init() function.
    // Run it here and in catch below, above the reportEvent call
    for await (const event of reportable.getEventsIterator()) {
      await reporter.reportEvent(event);
    }
  } catch (error: unknown) {
    let reporterCrashError;
    if (error instanceof Error) {
      reporterCrashError = Error("Reporter will be restarted after crash", {
        cause: error,
      });
    } else {
      reporterCrashError = Error(
        "Reporter will be restarted after crash\n"
        + `Nested error: ${error}`
      );
    }
    await reporter.reportEvent({ type: "error", error: reporterCrashError });

    return runReporter(reporter, reportable);
  }
}
