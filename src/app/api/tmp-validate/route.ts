import { EXAM_SETS } from "@/lib/exam/registry";
import { validateSet } from "@/lib/exam/spec";
export function GET() {
  return Response.json(
    EXAM_SETS.map((s) => ({ id: s.id, errors: validateSet(s) })),
  );
}
