import React, { useState, useEffect } from 'react';

const API_URL = 'https://api.api-ninjas.com/v1/quotes?category=success';

const GetQuotes = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch(API_URL, {
          headers: { 'X-API-KEY': 'Eo6Yxc4pipnG+EAawIqrZQ==UVcZHMb2eIRY6br0' },
        });
        const data = await response.json();
        setQuote(data[0].quote);
        setAuthor(`- ${data[0].author}`);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchQuote();
  }, []);

  return (
    <div className="display-quotes">
      <blockquote>
        <p>{isLoading ? 'Quotes Loading...' : error || quote}</p>
        <cite>{isLoading ? 'Author Loading...' : error || author}</cite>
      </blockquote>
    </div>
  );
};

export default GetQuotes;
