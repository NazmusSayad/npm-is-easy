console.clear()
const TEST_TARGET = '../noarg'
import { app } from '../app'
import '../main'

// app.start(['init', TEST_TARGET])
// app.start(['dev', TEST_TARGET, '--node'])
app.start(['build', TEST_TARGET, '--node'])
// app.start(['build', TEST_TARGET, '--worker'])
