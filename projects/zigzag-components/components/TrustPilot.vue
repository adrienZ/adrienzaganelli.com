<template>
  <div
    id="trustpilot-widget"
    ref="el"
    class="LtTrustpilot"
    data-locale="fr-FR"
    :data-template-id="templateId"
    data-businessunit-id="4fd8df21000064000516790d"
    :data-theme="theme"
    :data-style-height="height"
    :data-style-width="width"
    v-bind="$attrs"
  >
    <a
      href="https://fr.trustpilot.com/review/leetchi.com"
      rel="noopener noreferrer"
      target="_blank"
      class="block"
      :style="{
        lineHeight: height + 'px',
      }"
    >
      Trustpilot please disable adblock
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, PropType, onUpdated } from "vue";
import { TrustpilotTemplate } from "../javascript/models/trustpilot";

declare const window: any;
export default defineComponent({
  props: {
    templateId: {
      type: String as PropType<TrustpilotTemplate>,
      default: TrustpilotTemplate.Mini,
    },
    theme: {
      type: String as PropType<"white" | "dark">,
      default: "dark",
    },
    height: {
      type: Number,
      default: 88,
    },
    width: {
      type: Number,
      default: 150,
    },
  },
  setup() {
    const el = ref(null);

    const renderIframe = () => {
      if (!window.Trustpilot) {
        const aScript = document.createElement("script");
        aScript.type = "text/javascript";
        aScript.src =
          "//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
        aScript.async = true;
        document.head.appendChild(aScript);
        aScript.onload = function () {
          window.Trustpilot.loadFromElement(el.value);
        };
      } else {
        window.Trustpilot.loadFromElement(el.value);
      }
    };

    onMounted(renderIframe);
    onUpdated(() => {
      if (window.Trustpilot?.Modules?.WidgetManagement?.widgets[0]) {
        const elementToRemove =
          window.Trustpilot.Modules.WidgetManagement.widgets[0];

        elementToRemove.destroy();
        elementToRemove.container.querySelector("iframe").remove();
        elementToRemove.initialize();
      }
    });

    return { el };
  },
});
</script>
