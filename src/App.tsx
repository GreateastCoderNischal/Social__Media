import { Route, Routes } from "react-router-dom"
import SignIn from "./_auth/forms/SignIn"
import SignUp from "./_auth/forms/SignUp"
import { Home, PageLayout } from "./_root/Pages"
import AuthLayout from "./_auth/AuthLayout"
import "bootstrap/dist/css/bootstrap.min.css"
function App() {
  return (
    <main className="w-full h-screen">
      <Routes>
        {/* Public Route */}
        <Route element={<AuthLayout />}>

          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Route>
        {/* Private Route */}
        <Route element={<PageLayout />}>

          <Route index element={<Home />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App
