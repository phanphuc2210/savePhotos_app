import NotFound from "components/NotFound"
import { Route, Routes } from "react-router-dom"
import AddEditPage from "./pages/AddEdit"
import Mainpage from "./pages/Main"


function Photo() {
    return (
        <Routes>
            <Route path='' element={<Mainpage/>}/>
            <Route path="add" element={<AddEditPage/>}/>

            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}

export default Photo