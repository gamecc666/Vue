/// <reference path="dist/GC.Spread.Sheets.d.ts" />
/*!
 *
 * SpreadJS Wrapper Components for Angular 0.0.0
 *
 * Copyright(c) GrapeCity, Inc.  All rights reserved.
 *
 * Licensed under the SpreadJS Commercial License.
 * us.sales@grapecity.com
 * http://www.grapecity.com/licensing/grapecity/
 *
 */
import { OnChanges, SimpleChanges, AfterViewInit, QueryList, OnDestroy, EventEmitter, ElementRef } from '@angular/core';
export declare class ColumnComponent implements OnChanges {
    private changes;
    private sheet?;
    private index?;
    width?: number;
    dataField?: string;
    headerText?: string;
    visible?: boolean;
    resizable?: boolean;
    autoFit?: boolean;
    style?: GC.Spread.Sheets.Style;
    cellType?: GC.Spread.Sheets.CellTypes.Base;
    headerStyle?: GC.Spread.Sheets.Style;
    formatter: any;
    onAttached(sheet: GC.Spread.Sheets.Worksheet, index: number): void;
    private onColumnChanged();
    ngOnChanges(changes: SimpleChanges): void;
}
export declare class WorksheetComponent implements OnChanges, AfterViewInit {
    private sheet;
    columns?: QueryList<ColumnComponent>;
    rowCount?: number;
    colCount?: number;
    dataSource: any;
    name?: string;
    frozenColumnCount?: number;
    frozenRowCount?: number;
    frozenTrailingRowCount?: number;
    frozenTrailingColumnCount?: number;
    allowCellOverflow?: boolean;
    frozenlineColor?: string;
    sheetTabColor?: string;
    selectionPolicy?: number;
    selectionUnit?: number;
    zoom?: number;
    currentTheme?: string;
    clipBoardOptions?: number;
    rowHeaderVisible?: boolean;
    colHeaderVisible?: boolean;
    rowHeaderAutoText?: number;
    colHeaderAutoText?: number;
    rowHeaderAutoTextIndex?: number;
    colHeaderAutoTextIndex?: number;
    isProtected?: boolean;
    showRowOutline?: boolean;
    showColumnOutline?: boolean;
    selectionBackColor?: string;
    selectionBorderColor?: string;
    defaultStyle?: GC.Spread.Sheets.Style;
    rowOutlineInfo?: any[];
    columnOutlineInfo?: any[];
    autoGenerateColumns?: boolean;
    constructor();
    onAttached(): void;
    getSheet(): GC.Spread.Sheets.Worksheet;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
export declare class SpreadSheetsComponent implements OnChanges, AfterViewInit, OnDestroy {
    private elRef;
    private spread?;
    private spreadOptions?;
    style: {
        width: string;
        height: string;
    };
    allowUserResize?: boolean;
    allowUserZoom?: boolean;
    allowUserEditFormula?: boolean;
    allowUserDragFill?: boolean;
    allowUserDragDrop?: boolean;
    allowUserDragMerge?: boolean;
    allowUndo?: boolean;
    allowSheetReorder?: boolean;
    allowContextMenu?: boolean;
    allowUserDeselect?: boolean;
    allowCopyPasteExcelStyle?: boolean;
    allowExtendPasteRange?: boolean;
    cutCopyIndicatorVisible?: boolean;
    cutCopyIndicatorBorderColor?: string;
    copyPasteHeaderOptions?: number;
    defaultDragFillType?: number;
    enableFormulaTextbox?: boolean;
    highlightInvalidData?: boolean;
    newTabVisible?: boolean;
    tabStripVisible?: boolean;
    tabEditable?: boolean;
    tabStripRatio?: number;
    tabNavigationVisible?: boolean;
    autoFitType?: number;
    referenceStyle?: number;
    backColor?: string;
    grayAreaBackColor?: string;
    resizeZeroIndicator?: number;
    showVerticalScrollbar?: boolean;
    showHorizontalScrollbar?: boolean;
    scrollbarMaxAlign?: boolean;
    scrollIgnoreHidden?: boolean;
    hostStyle?: any;
    hostClass?: string;
    hideSelection?: boolean;
    name?: string;
    backgroundImage?: string;
    backgroundImageLayout?: number;
    showScrollTip?: number;
    showResizeTip?: number;
    showDragDropTip?: boolean;
    showDragFillTip?: boolean;
    showDragFillSmartTag?: boolean;
    scrollbarShowMax?: boolean;
    useTouchLayout?: boolean;
    workbookInitialized: EventEmitter<any>;
    validationError: EventEmitter<any>;
    cellClick: EventEmitter<any>;
    cellDoubleClick: EventEmitter<any>;
    enterCell: EventEmitter<any>;
    leaveCell: EventEmitter<any>;
    valueChanged: EventEmitter<any>;
    topRowChanged: EventEmitter<any>;
    leftColumnChanged: EventEmitter<any>;
    invalidOperation: EventEmitter<any>;
    rangeFiltering: EventEmitter<any>;
    rangeFiltered: EventEmitter<any>;
    tableFiltering: EventEmitter<any>;
    tableFiltered: EventEmitter<any>;
    rangeSorting: EventEmitter<any>;
    rangeSorted: EventEmitter<any>;
    clipboardChanging: EventEmitter<any>;
    clipboardChanged: EventEmitter<any>;
    clipboardPasting: EventEmitter<any>;
    clipboardPasted: EventEmitter<any>;
    columnWidthChanging: EventEmitter<any>;
    columnWidthChanged: EventEmitter<any>;
    rowHeightChanging: EventEmitter<any>;
    rowHeightChanged: EventEmitter<any>;
    dragDropBlock: EventEmitter<any>;
    dragDropBlockCompleted: EventEmitter<any>;
    dragFillBlock: EventEmitter<any>;
    dragFillBlockCompleted: EventEmitter<any>;
    editStarting: EventEmitter<any>;
    editChange: EventEmitter<any>;
    editEnding: EventEmitter<any>;
    editEnd: EventEmitter<any>;
    editEnded: EventEmitter<any>;
    rangeGroupStateChanging: EventEmitter<any>;
    rangeGroupStateChanged: EventEmitter<any>;
    selectionChanging: EventEmitter<any>;
    selectionChanged: EventEmitter<any>;
    sheetTabClick: EventEmitter<any>;
    sheetTabDoubleClick: EventEmitter<any>;
    sheetNameChanging: EventEmitter<any>;
    sheetNameChanged: EventEmitter<any>;
    userZooming: EventEmitter<any>;
    userFormulaEntered: EventEmitter<any>;
    cellChanged: EventEmitter<any>;
    columnChanged: EventEmitter<any>;
    rowChanged: EventEmitter<any>;
    activeSheetChanging: EventEmitter<any>;
    activeSheetChanged: EventEmitter<any>;
    sparklineChanged: EventEmitter<any>;
    rangeChanged: EventEmitter<any>;
    buttonClicked: EventEmitter<any>;
    editorStatusChanged: EventEmitter<any>;
    floatingObjectChanged: EventEmitter<any>;
    floatingObjectSelectionChanged: EventEmitter<any>;
    pictureChanged: EventEmitter<any>;
    floatingObjectRemoving: EventEmitter<any>;
    floatingObjectRemoved: EventEmitter<any>;
    pictureSelectionChanged: EventEmitter<any>;
    floatingObjectLoaded: EventEmitter<any>;
    touchToolStripOpening: EventEmitter<any>;
    commentChanged: EventEmitter<any>;
    commentRemoving: EventEmitter<any>;
    commentRemoved: EventEmitter<any>;
    slicerChanged: EventEmitter<any>;
    sheets?: QueryList<WorksheetComponent>;
    constructor(elRef: ElementRef);
    ngAfterViewInit(): void;
    private onSheetsChanged(sheetComponents);
    private initSheets();
    private bindCustomEvent(spread);
    setSpreadOptions(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}
export declare class SpreadSheetsModule {
}
