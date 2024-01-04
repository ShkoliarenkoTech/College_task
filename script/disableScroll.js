window.disableScroll = function () {
    const widthScroll = window.innerWidth - document.body.offsetWidth;
    document.body.style.cssText = `
      position: relative;
      top: ${-window.scrollY}px;
      left: 0;
      width: 100%;
      overflow: hidden;
      height: 100vh;
      padding-right: ${widthScroll};
    `;
  };
  
  window.enableScroll = function () {
    document.body.style.cssText = `
      position: relative;
    `;
    window.scroll({ top: document.body.dbscrollY });
  };