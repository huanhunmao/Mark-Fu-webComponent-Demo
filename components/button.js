class Button extends HTMLElement {
    constructor() {
      super();
      // 获取模板内容
      let template = document.getElementById('btn_tpl');
      let templateContent = template.content;
  
      const shadowRoot = this.attachShadow({ mode: 'open' });
      const btn = document.createElement('button');
      btn.appendChild(templateContent.cloneNode(true));
      btn.setAttribute('class', 'mark-button');
      // 定义类型  primary | warning | default
      const type = {
        'primary': '#06c',
        'warning': 'red',
        'default': '#f0f0f0'
      }
      const btnType = this.getAttribute('type') || 'default';
      const btnColor = btnType === 'default' ? 'pink' : '#fff';
  
      // 创建样式
      const style = document.createElement('style');
      // 为shadow Dom添加样式
      style.textContent = `
        .mark-button {
          position: relative;
          display: inline-block;
          padding:8px 20px;
          border-radius: 50px;
          margin-right: 3px;
          background-color: ${type[btnType]};
          color: ${btnColor};
          box-shadow: inset 0 5px 10px rgba(0,0,0, .3);
          cursor: pointer;
        }
      `
      shadowRoot.appendChild(style);
      shadowRoot.appendChild(btn);
    }
  }
  customElements.define('mark-button', Button);