import Providers from "@components/Providers";

export const metadata = {
  title: "SIES EduConnect",
  description: "Creating ease to learn!",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <script src="https://kit.fontawesome.com/c610bdc2dd.js" crossOrigin="anonymous"></script>
      </head>
        <body>
            <Providers>
                {children}
            </Providers>
        </body>
    </html>
  );
}
