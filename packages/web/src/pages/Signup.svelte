<script>
  import  { Backend } from '@mahjong-client/core'

  let name = ''
  let password = ''

  async function onSubmit(e) {
    e.preventDefault()

    const client = new Backend(process.env.BACKEND_URL)
    await client.signup({ name, password })
  }
</script>

<main>
  <h1>signup page</h1>
  <article>
    <form on:submit="{onSubmit}">
      <label for="name-input">Name</label>
      <input type="text" id="name-input" name="name" bind:value="{name}" />

      <label for="password-input">Password</label>
      <input type="password" id="password-input" name="password" bind:value="{password}" />

      <input type="submit" value="Signup" />
    </form>
  </article>
</main>
