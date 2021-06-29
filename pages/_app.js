import { motion } from 'framer-motion';
import { AnimateSharedLayout } from "framer-motion"
import { AnimatePresence } from "framer-motion"
// In pages/_app.js
function App({ Component, pageProps, router}) {
  return (
    <AnimatePresence exitBeforeEnter>
    <AnimateSharedLayout>
    <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
      pageInitial: {
        opacity: 0
      },
      pageAnimate: {
        opacity: 1
      },
    }}>
    <Component {...pageProps} />
    </motion.div>
    </AnimateSharedLayout>
    </AnimatePresence>
  )
}

export default App;
