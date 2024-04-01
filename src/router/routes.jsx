import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AiModels from "../pages/AiModels.jsx";
import ModelDetail from "../pages/ModelDetail.jsx";
import UpdateModel from "../pages/UpdateModel.jsx";

const AppRoutes = () => {
    return (

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/model_try" element={<AiModels />} />
            <Route path='/model_details' element={<ModelDetail />} />
            <Route path='/models_update' element={<UpdateModel />} />
        </Routes>

    )
}

export default AppRoutes;
