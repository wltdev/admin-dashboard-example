export function getRouteName(path: string) {
  const routes = <any>{
    "/": "Dashboard",
    "/album": "Album",
  };

  return routes[path];
}
