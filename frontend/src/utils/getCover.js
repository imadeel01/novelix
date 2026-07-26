export async function getBookCover(title, author) {
    try {
        const res = await fetch(`https://openlibrary.org/search.json?title=${encodeURIComponent(title)}&author=${encodeURIComponent(author)}&limit=1`);
        const data = await res.json();
        const coverId = data.docs?.[0]?.cover_i;
        return coverId ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg` : null;
    } catch {
        return null;
    }
}