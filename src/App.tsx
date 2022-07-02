import { Provider as ReactGlobalStateProvider } from "./react-global-state";

export default function App() {
  return (
    <ReactGlobalStateProvider
      stores={{
        user: {
          userName: {
            type: "string"
          },
          userPass: {
            type: "string"
          }
        },
        profiles: {
          profileName: {
            type: "string"
          },
          profileStatus: {
            type: "enum"
          }
        }
      }}
    >
      hello
    </ReactGlobalStateProvider>
  );
}
