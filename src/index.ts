
const app = new Elysia()
  .get("/", () => "Hello elysia")
  .get("/hello/:name", (name) => `Hello ${name}`)
  .get("belajar", () => "saya belajar")
  .post("/belajar", ({ body: { kelas } }) => {
    return { status: "mantap", kelas: kelas };
    {
      body: t.Object({
        kelas: t.string({
          minLength: 1,
        }),
      });
    }
  })
  .get(
    "belajar/:id",
    ({ params: { id }, query: { nama } }) =>
      `saya bealjar dengan params ${id} querynya adalah ${nama}`
  )
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
