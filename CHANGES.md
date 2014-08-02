# Changes #
1. `README.md`  
Added some links, formatted as a list, added Windows instructions.

2. `lodash_workshop.js` > `lololodash.js`  
Renamed this file to match the instructions in `README.md`.
**title** and **subtitle** are the first two lines in this image:  
![](https://cloud.githubusercontent.com/assets/1672405/3788233/ab05b90a-1a59-11e4-860e-e6f810f1c898.gif)  
So, I fixed those. I'm not sure what part of the install for **learnyounode**
creates the `.bin` directory and adds the two script files that wrap the
call to **nodejs**. Here's the batch file:
```bat
@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\learnyounode\learnyounode.js" %*
) ELSE (
  node  "%~dp0\..\learnyounode\learnyounode.js" %*
)
```

3. `package.json`  
Updated this to match the other two. **learnyounode** had `preferGlobal: true`, so I
added that just in case.

3. I renamed `1_getting_startet` > `1_getting_started` and `6_give_me_overview` >
`6_give_me_an_overview`.

4. The rest of the changes should be me making proofreading corrections to your English
as you requested. I'll just let you look at the diffs on those files. I'll probably try
to establish a consistent look-and-feel style for the lessons while I'm in there.

5. I just noticed you're using the examples from the **Lo-Dash** documentation.
Maybe you could come up with some new ones? I'd also say that you should have at least
10 discrete items to pass to the functions on each verify.

6. In #3, you more or less told them exactly what to do.

7.	One thing I notice you doing frequently is getting hyphen happy. Hopefully you
	don't mind me explaining a little bit. In English, the hyphen, "-", (not to be confused
	with the dash, "--", which is twice as long) is used for:  
	1.	Breaking long words at the edge of a page -- always at a syllable boundary.  
		**e.g.** "The man from Constan-\r\ntinople had very large feet."
	2.	Creating new compound adjectives, but only when used *before* the noun.  
		**e.g.** RIGHT "He had an under-developed sense of duty."  
		----WRONG "She thought the meat was over-cooked."
	3.	Some words are always written with a hyphen or hyphens.  
		**e.g.** "There was too much back-and-forth about the dinner, he though."
	4.	To emphasize a prefix or suffix or to coin a new word.  
		**e.g.** "It was so faint, it was almost sub-visual."
	5.	Compound object/verb constructions.  
		**e.g.** "He's a son of a pizza-loving donut-gorger."
	6.	When two forms of the same word differing only by prefix or suffix are
		juxtaposed for effect.  
		**e.g.** "Afterward, we either re- or dis-connected."  

	Anyway, that's a lot to say that it's not necessary to write "Object-function".
	If you do, it implies a much closer relationship between the two things than just
	an adjective describing a noun. Like, you could say, "**Lo-Dash** is a library
	full of Object- and Array-function tools." Even that's a little iffy :expressionless:.

8. Aww, don't use the example data for the verification, verbatim on #5!

9. I removed `thisArg` from the signature of `reduce` as we had been leaving
it off up to that point.

10. All done. I hope you don't think I went too far, there. When I get an itch
to proofread something, what am I going to do? :smile_cat:
