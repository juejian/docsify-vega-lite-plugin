# docsify vega-lite plugin demo

usage: [see](https://github.com/juejian/docsify-vega-lite-plugin/)

**refer link**

- [vega-lite github源码](https://github.com/vega/vega-lite) ,
- [vega-lite github 文档](https://vega.github.io/vega-lite/),
- [vega-lite 图形示例 官网文档](https://vega.github.io/vega-lite/examples/)
- [Embedding Vega-Lite](https://vega.github.io/vega-lite/usage/embed.html)

为了更好地演示渲染结果 vega-lite 和 源码，引入了 docsify-tab 插件。

## eg1:数据来源于外部网站

<!-- tabs:start -->

#### **render**

```vega-lite
{
  $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
  description: 'A simple bar chart with embedded data.',
  data: {
    values: [
      {a: 'A', b: 28},
      {a: 'B', b: 55},
      {a: 'C', b: 43},
      {a: 'D', b: 91},
      {a: 'E', b: 81},
      {a: 'F', b: 53},
      {a: 'G', b: 19},
      {a: 'H', b: 87},
      {a: 'I', b: 52}
    ]
  },
  mark: 'bar',
  encoding: {
    x: {field: 'a', type: 'ordinal'},
    y: {field: 'b', type: 'quantitative'}
  }
}
```

#### **src**

<pre data-lang=""><code class="lang-">```vega-lite
{
  $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
  description: 'A simple bar chart with embedded data.',
  data: {
    values: [
      {a: 'A', b: 28},
      {a: 'B', b: 55},
      {a: 'C', b: 43},
      {a: 'D', b: 91},
      {a: 'E', b: 81},
      {a: 'F', b: 53},
      {a: 'G', b: 19},
      {a: 'H', b: 87},
      {a: 'I', b: 52}
    ]
  },
  mark: 'bar',
  encoding: {
    x: {field: 'a', type: 'ordinal'},
    y: {field: 'b', type: 'quantitative'}
  }
}
```
</code></pre>

<!-- tabs:end -->

## eg2: 数据来源于本网站

<!-- tabs:start -->

#### **render**


```vega-lite
{
  "data": {"url": "data/barley.json"},
  "mark": "bar",
  "encoding": {
    "x": {"aggregate": "sum", "field": "yield"},
    "y": {"field": "variety"},
    "color": {"field": "site"}
  }
}
```

#### **src**

<pre data-lang=""><code class="lang-">```vega-lite
{
  "data": {"url": "data/barley.json"},
  "mark": "bar",
  "encoding": {
    "x": {"aggregate": "sum", "field": "yield"},
    "y": {"field": "variety"},
    "color": {"field": "site"}
  }
}
```

</code></pre>

<!-- tabs:end -->
