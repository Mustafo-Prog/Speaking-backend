const { z } = require("zod");

const schema = z.object({
  tag: z.string().min(1).max(30),
  name: z.string().min(2),
  value: z.string().min(20),
});


module.exports = schema;