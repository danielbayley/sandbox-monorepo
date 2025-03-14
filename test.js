import assert from "node:assert/strict"
import { describe, it } from "node:test"
import { ab } from "./index.js"

describe("test", () =>
  it("pass", () => assert.equal(ab, "share + a\nshare + b")))
