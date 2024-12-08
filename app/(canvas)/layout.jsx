import Auth from "@components/Auth";

import "@styles/globals.css"
import "@styles/canvas/canvas.css"
import CanvasNav from "@components/CanvasNav";
import CanvasDashboard from "@components/CanvasDashboard";

export const metadata = {
  title: "SIES EduConnect",
  description: "Creating ease to learn!",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
        <body>
          <Auth>
            <div className="main_canvas">
              <CanvasNav/>
              <div className="canvas_content">
                  <div className="canvas_dashboard">
                     <CanvasDashboard/>
                  </div> 
                  <div className="hr_wrapper"><div className="hr"></div></div>
                  <div className="canvas_main_content">
                      { children }
                  </div>
              </div>
            </div>
          </Auth>
        </body>
    </html>
  );
}
