import { ClientOnly } from "remix-utils";
import type { User } from "~/models/User";
import { LoginButton, LogoutButton } from "../auth";
import ThemeSwitcher from "./theme-switcher";

const Navbar = ({
  user,
  firebaseClientConfig,
}: {
  user: User;
  firebaseClientConfig: any;
}) => {
  return (
    <div className="navbar bg-base-100 shadow-md px-2 md:mb-3 md:rounded-lg">
      <a href="https://www.rowy.io/?utm_source=roadmap">
        <div className="flex flex-col justify-start select-none rounded-lg px-4 py-1">
          <span className="text-2xl font-bold">Roadmap</span>
          <span className="text-xs">Powered by Rowy</span>
        </div>
      </a>
      <div className="ml-auto">
        <ClientOnly fallback={<></>}>{() => <ThemeSwitcher />}</ClientOnly>
        {user === null ? (
          <LoginButton firebaseConfig={firebaseClientConfig} />
        ) : (
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost hover:bg-base-200 focus:bg-base-200 rounded-btn gap-2"
            >
              <div className="w-12 inline-block sm:w-fit sm:max-w-[8rem] text-ellipsis whitespace-nowrap overflow-hidden">
                {user.displayName}
              </div>
              <div className="h-9 overflow-hidden rounded-full ring ring-primary ring-offset-base-100">
                <img
                  className="h-full"
                  src={`${user.photoURL}`}
                  alt="profile"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content shadow bg-base-200 mt-1"
            >
              <li>
                <LogoutButton firebaseConfig={firebaseClientConfig} />
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
