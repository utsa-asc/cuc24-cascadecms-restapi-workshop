# Emoji to HTML Entity Converter

This Python script converts all emoji characters in a CSV file to their corresponding HTML entities, making the content web-safe and compatible with systems that don't support Unicode emojis.

## Features

- 🔄 Converts all emoji characters to HTML decimal entities (e.g., 😀 → `&#128512;`)
- 📂 Processes CSV files while preserving structure and formatting
- 🔍 Automatically detects CSV delimiter (comma, semicolon, tab, etc.)
- 📊 Provides conversion statistics
- 🌍 Handles multi-character emojis and complex Unicode sequences
- 💻 Command-line interface with flexible file naming

## Usage

### Basic Usage
```bash
python3 emoji_to_html_converter.py
```
This will convert `Fall-2025-UCC-Events.csv` to `Fall-2025-UCC-Events_html_entities.csv`

### Custom Files
```bash
python3 emoji_to_html_converter.py input_file.csv output_file.csv
```

### Examples
```bash
# Convert specific files
python3 emoji_to_html_converter.py events.csv events_clean.csv

# Using default names
python3 emoji_to_html_converter.py
```

## What it converts

The script converts emojis from these Unicode ranges:
- 😀-😯 Emoticons
- 🌀-🗿 Symbols & Pictographs  
- 🚀-🛿 Transport & Map Symbols
- 🇦-🇿 Regional Indicator Symbols (Flags)
- ✂️-➰ Dingbats
- 🤀-🧿 Supplemental Symbols and Pictographs
- 🩰-🫿 Symbols and Pictographs Extended-A
- ☀️-⛿ Miscellaneous Symbols

## Example Conversions

| Original | HTML Entity | Description |
|----------|-------------|-------------|
| 💻 | `&#128187;` | Laptop computer |
| 📄 | `&#128196;` | Page facing up |
| 🔍 | `&#128269;` | Magnifying glass |
| 🤖 | `&#129302;` | Robot face |
| ✍️ | `&#9997;&#65039;` | Writing hand (multi-character) |

## Output

The script provides detailed feedback:
```
🔄 Emoji to HTML Entity Converter
==================================================
Processed 100 rows...
✅ Successfully converted 484 emojis to HTML entities!
📁 Input file: Fall-2025-UCC-Events.csv
📁 Output file: Fall-2025-UCC-Events_html_entities.csv
📊 Processed 127 rows

🎉 Conversion completed successfully!
```

## Requirements

- Python 3.6 or higher
- No additional packages required (uses only standard library)

## Notes

- The original CSV file structure and formatting are preserved
- All non-emoji content remains unchanged
- Multi-character emojis (like skin tone variants) are properly handled
- The script automatically detects CSV delimiters
- UTF-8 encoding is used for proper Unicode handling

## Error Handling

The script includes robust error handling for:
- Missing input files
- File permission issues
- Malformed CSV files
- Encoding problems

If an error occurs, the script will display a descriptive error message and exit gracefully.
