import { AllowedComponentProps, ComponentCustomProps, VNodeProps } from 'vue';

export type PublicProps = VNodeProps & AllowedComponentProps & ComponentCustomProps;

// eslint-disable-next-line @typescript-eslint/ban-types
export type GlobalComponentConstructor<Props = {}, Slots = {}> = {
  new (): {
    $props: PublicProps & Props
    $slots: Slots
  }
}
