interface BaseOptions extends CanvasTextDrawingStyles {
    /** 水印之间的水平间距 */
    gapX: number;
    /** 水印之间的垂直间距 */
    gapY: number;
    /** 水印在 canvas 画布上绘制的水平偏移量 */
    offsetLeft: number;
    /** 水印在 canvas 画布上绘制的垂直偏移量 */
    offsetTop: number;
    /** 单个水印宽度 */
    width: number;
    /** 单个水印高度 */
    height: number;
    /** 水印透明度 */
    opacity: number;
    /** 旋转的角度 */
    rotate: number;
    /** 设置字体大小 */
    fontSize: number;
    /** 设置字体粗细 */
    fontWeight: string | number;
    /** 规定字体样式 */
    fontStyle: 'normal' | 'italic';
    /** 规定字体变体 */
    fontVariant: 'normal' | 'small-caps';
    /** 设置字体颜色 */
    fontColor: string;
    /** 设置水印文字的字体 */
    fontFamily: string;
}
interface WatermarkOptions extends Partial<BaseOptions> {
    /** 是否开启监视模式 */
    monitor?: boolean;
    /** 图片源，建议导出 2 倍或 3 倍图，优先使用图片渲染水印 */
    image?: string;
    /** 水印文本, 为数组时表示多行水印 */
    text?: string | string[];
    /** 盲水印文本 */
    blindText?: string;
    /** 盲水印文本大小 */
    blindFontSize?: string | number;
    /** 盲水印透明度 */
    blindOpacity?: number;
    /** 样式层级 */
    zIndex?: number;
    /** 是否使用水印组件包裹内容  */
    pack?: boolean;
    /** 水印挂载的容器 */
    container?: HTMLElement | string | null;
    /** 水印挂载的样式 */
    containerStyle?: Record<string, any>;
    /** 展示模式，interval表示错行展示 */
    mode?: 'repeat' | 'interval';
}

declare const blindDecryption: (ctx: CanvasRenderingContext2D) => void;

declare const defaultOptions: Partial<WatermarkOptions>;

declare class Watermark {
    /** 水印配置 */
    private options;
    /** 水印挂载容器 */
    private container;
    /** 水印的包含节点 */
    private watermarkContent;
    /** 水印节点 */
    private watermarkDom;
    /** 水印样式 */
    private style;
    private watermarkTag;
    private shadowRoot;
    private mutationObserver;
    constructor(options?: WatermarkOptions);
    /**
     * 更新水印配置，并重新渲染
     * @param options
     */
    update(options?: WatermarkOptions): void;
    /**
     * 显示水印
     */
    show(): void;
    /**
     * 隐藏水印
     */
    hide(): void;
    /**
     * 销毁水印
     */
    destroy(): void;
    /**
     * 判断是否发起重新生成水印
     * @param mutation
     */
    _isAgainRender: (mutation: MutationRecord) => boolean;
    _getNodeRandomId: (node: Node) => any;
    /**
     * 销毁MutationObserver
     */
    _destroyMutationObserver: () => void;
    /**
     * 获取水印节点
     * @param height
     */
    _getWatermarkDom: (watermarkHeight: number) => Promise<HTMLElement>;
    _getWatermarkHeight: () => number;
    _render(): Promise<void>;
}

export { Watermark, WatermarkOptions, blindDecryption, defaultOptions };
