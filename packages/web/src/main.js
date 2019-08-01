import crayon from 'crayon'
import { router } from 'crayon-svelte'

import Top from './pages/Top.svelte'
import Signup from './pages/Signup.svelte'

const app = crayon.create()

app.use(router())

app.path('/', (req, res) => res.mount(Top))
app.path('/signup', (req, res) => res.mount(Signup))

app.load()
