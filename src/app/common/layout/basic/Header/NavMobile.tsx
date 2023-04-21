interface NavMobileProps {
  isShow: boolean;
  onHide: () => void;
  navLinks: any[];
  selectedLink: string;
  onSelectLink: (item: any) => void;
}
const NavMobile = (props: NavMobileProps) => {
  const { isShow, onHide, navLinks, selectedLink, onSelectLink } = props;
  return (
    <div
      className={`fixed top-0 w-full  h-screen z-[1000] -left-full ${
        isShow ? "translate-x-full" : ""
      } transition-transform duration-500`}
    >
      <div className="relative w-full h-full">
        <div
          className={`absolute w-full h-full bg-slate-900  z-[0] opacity-0 ${
            isShow ? "opacity-40" : ""
          } duration-1000`}
          onClick={() => {
            console.log("click");
            onHide();
          }}
        ></div>
        <div className="absolute bg-slate-100 dark:bg-slate-900 h-full w-[80%] flex  flex-col justify-between z-[1]">
          <div className="px-4 py-6">
            <span className="grid h-10 w-32 place-content-center rounded-lg bg-slate-200 dark:bg-gray-600 text-xs text-gray-600">
            </span>

            <nav aria-label="Main Nav" className="mt-6 flex flex-col space-y-3">
              {navLinks?.map((item, index) => (
                <a
                  href={item.link}
                  className={`flex items-center gap-4 rounded-lg bg-slate-200 dark:bg-gray-800 px-4 py-2 hover:text-primary ${
                    selectedLink === item.link ? "text-primary" : ""
                  }`}
                  onClick={() => {
                    onSelectLink(item.link);
                    onHide();
                  }}
                  key={`nav-mobile-${index}`}
                >
                  <span className="text-sm font-medium"> {item.title} </span>
                </a>
              ))}
            </nav>
          </div>

          <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
            <a href="#" className="flex items-center gap-2 p-4 ">
              <div>
                <p className="text-xs">
                  <strong className="block font-medium">PhongNV</strong>

                  <span> phongnv986@gmail.com.vn </span>
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavMobile;
