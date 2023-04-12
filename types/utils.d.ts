type StrictPropsWithChildren = Required<React.PropsWithChildren>

type As = React.ElementType

type Combine<P, T> = P & Omit<T, keyof P>

type OverRidableComponentProps<Props, Element extends As> = Combine<
  Props,
  React.ComponentPropsWithoutRef<Element>
>
