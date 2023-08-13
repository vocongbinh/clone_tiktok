import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { publicRoutes, privateRoutes } from './routes';

import { DefaultLayout } from './components/layout';
import { Fragment } from 'react';
function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    {publicRoutes.map((router) => {
                        const Page = router.component;
                        let Layout;
                        if (!router.layout) {
                            Layout = DefaultLayout;
                        } else {
                            if (router.layout === null) {
                                Layout = Fragment;
                            } else {
                                Layout = router.layout;
                            }
                        }
                        return (
                            <Route
                                path={router.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
