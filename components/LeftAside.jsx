import AsideButton from "./Asidebutton";
function LeftAside() {
  return (
    <aside className="col-start-1 col-end-2 row-start-2 row-end-3 hidden md:flex flex-col justify-self-start ms-4">
      <AsideButton caption="🏠Home" />
      <AsideButton caption="🎙️Podcasts" />
      <AsideButton caption="🎥Videos" />
      <AsideButton caption="🏷️Tags" />
      <AsideButton caption="🆘DEV Help" />
      <AsideButton caption="🛠️Tools" />
      <AsideButton caption="📝Prism" />
      <AsideButton caption="📚Resources" />
      <AsideButton caption="🛒Swag Shop" />
      <AsideButton caption="🗞️News" />
    </aside>
  );
}

export default LeftAside;
