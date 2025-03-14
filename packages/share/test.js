import assert from "node:assert/strict"
import { describe, it } from "node:test"
import { share } from "./index.js"

describe("test", () =>
  it("pass", () => assert.equal(share, "share")))
