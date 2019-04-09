<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
<html>
	<body bgcolor="#bfbfbf">
		<h1 style="color:black; text-align:center;">SITEMAP</h1>
		<table style="border: 3px solid black; background-color:#8c8c8c; color:#f2f2f2; width:900px; margin:10px auto;" border="3">
			<tr >
				<th>loc</th>
				<th>lastmod</th>
				<th>changefreq</th>
				<th>priority</th>
			</tr>
			<xsl:for-each select="urlset/url">
			<tr>
				<td><xsl:value-of select="loc"/></td>
				<td><xsl:value-of select="lastmod"/></td>
				<td><xsl:value-of select="changefreq"/></td>
				<td><xsl:value-of select="priority"/></td>
			</tr>
			</xsl:for-each>
		</table>
	</body>
</html>
</xsl:template>
</xsl:stylesheet>