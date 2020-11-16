# MRAViewer: Machine Readable Appendix Viewer

2020.11.16

## Abstract

MRAViewerはMRA dataの内容をブラウザーで表示するアプリケーションである。  

## Requirements

Web Browser  

## Installation

ファイルをダウンロードする。  

## Launch

htmlフォルダ内のindex.htmlをChromeなどのWeb Browserで開く。

## Release Note

Date      |Version |Desctiption
:---------|:------:|:-----------
2020.11.06|1.0.0   | 1st release
2020.11.09|1.1.0   | EOJ, EPCのshort name, objectのname の表示機能を追加
2020.11.10|1.1.1   | EDTのname の表示機能を追加
2020.11.16|1.1.2   | - Bug Fix: MRAのEOJレベルでoneOfがある場合に機器名のshortNameが表示されない件。<br>- Bug Fix: MRAのdata typeがarrayの場合にプロパティ名のshortNameが表示されない件。<br>- Bug Fix: MRAのdata typeがint8, int16 or int32で、値域のminimumが負の値の場合に、16進数での値域表示がおかしい件。
