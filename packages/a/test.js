import assert from "node:assert/strict"
import { describe, it } from "node:test"
import { a } from "./index.js"

describe("test", () =>
  it("pass", () => assert.equal(a, "share + a")))
