<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/rss">
<html>
	<body bgcolor="#bfbfbf">
		<h1 style="color:black; text-align:center;">RSS</h1>
		<table style="border: 3px solid black; background-color:#8c8c8c; color:#f2f2f2; width:900px; margin:10px auto;" border="3">
			<tr >
				<th>Title</th>
				<th>Description</th>
				<th>Link</th>
			</tr>
			<xsl:for-each select="channel/item">
			<tr>
				<td><xsl:value-of select="title"/></td>
				<td><xsl:value-of select="description"/></td>
				<td><xsl:value-of select="link"/></td>
			</tr>
			</xsl:for-each>
		</table>
	</body>
</html>
</xsl:template>
</xsl:stylesheet>