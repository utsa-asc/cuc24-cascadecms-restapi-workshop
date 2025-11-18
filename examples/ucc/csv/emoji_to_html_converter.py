#!/usr/bin/env python3
"""
Emoji to HTML Entity Converter for CSV Files

This script reads a CSV file, converts all emoji characters to their corresponding 
HTML entities, and saves the result to a new CSV file.
"""

import csv
import re
import html
import sys
from pathlib import Path

def unicode_to_html_entity(match):
    """Convert a unicode character to its HTML entity representation."""
    char = match.group(0)
    # Handle multi-character emojis by converting each character
    html_entities = []
    for c in char:
        code_point = ord(c)
        html_entities.append(f"&#{code_point};")
    return ''.join(html_entities)

def convert_emojis_to_html_entities(text):
    """
    Convert all emoji characters in text to HTML entities.
    
    This function uses regex to find emoji characters and converts them
    to their HTML entity equivalents.
    """
    if not isinstance(text, str):
        return text
    
    # Emoji regex pattern - covers most emoji ranges including clock and bullets
    emoji_pattern = re.compile(
        "["
        "\U0001F600-\U0001F64F"  # emoticons
        "\U0001F300-\U0001F5FF"  # symbols & pictographs
        "\U0001F680-\U0001F6FF"  # transport & map symbols
        "\U0001F1E0-\U0001F1FF"  # flags (iOS)
        "\U00002000-\U0000206F"  # general punctuation
        "\U00002070-\U0000209F"  # superscripts and subscripts
        "\U000020A0-\U000020CF"  # currency symbols
        "\U000020D0-\U000020FF"  # combining diacritical marks for symbols
        "\U00002100-\U0000214F"  # letterlike symbols
        "\U00002150-\U0000218F"  # number forms
        "\U00002190-\U000021FF"  # arrows
        "\U00002200-\U000022FF"  # mathematical operators
        "\U00002300-\U000023FF"  # miscellaneous technical (includes clock ⏰)
        "\U00002400-\U0000243F"  # control pictures
        "\U00002440-\U0000245F"  # optical character recognition
        "\U00002460-\U000024FF"  # enclosed alphanumerics
        "\U00002500-\U0000257F"  # box drawing
        "\U00002580-\U0000259F"  # block elements
        "\U000025A0-\U000025FF"  # geometric shapes
        "\U00002600-\U000026FF"  # miscellaneous symbols
        "\U00002700-\U000027BF"  # dingbats
        "\U000027C0-\U000027EF"  # miscellaneous mathematical symbols-a
        "\U000027F0-\U000027FF"  # supplemental arrows-a
        "\U00002800-\U000028FF"  # braille patterns
        "\U00002900-\U0000297F"  # supplemental arrows-b
        "\U00002980-\U000029FF"  # miscellaneous mathematical symbols-b
        "\U00002A00-\U00002AFF"  # supplemental mathematical operators
        "\U00002B00-\U00002BFF"  # miscellaneous symbols and arrows
        "\U000024C2-\U0001F251"  # enclosed characters
        "\U0001F900-\U0001F9FF"  # supplemental symbols and pictographs
        "\U0001FA70-\U0001FAFF"  # symbols and pictographs extended-a
        "]+", 
        flags=re.UNICODE
    )
    
    # Replace each emoji with its HTML entity
    return emoji_pattern.sub(unicode_to_html_entity, text)

def process_csv_file(input_file, output_file):
    """
    Process a CSV file to convert all emojis to HTML entities.
    
    Args:
        input_file (str): Path to the input CSV file
        output_file (str): Path to the output CSV file
    """
    
    try:
        # Check if input file exists
        if not Path(input_file).exists():
            print(f"Error: Input file '{input_file}' not found.")
            return False
        
        # Read the CSV file and process it
        with open(input_file, 'r', encoding='utf-8', newline='') as infile:
            # Try to detect the CSV format
            sample = infile.read(1024)
            infile.seek(0)
            
            # Detect delimiter
            sniffer = csv.Sniffer()
            delimiter = sniffer.sniff(sample).delimiter
            
            # Create CSV reader
            reader = csv.reader(infile, delimiter=delimiter)
            
            # Read all rows and convert emojis
            processed_rows = []
            emoji_count = 0
            
            for row_num, row in enumerate(reader, 1):
                processed_row = []
                for cell in row:
                    original_cell = cell
                    converted_cell = convert_emojis_to_html_entities(cell)
                    processed_row.append(converted_cell)
                    
                    # Count emojis converted in this cell
                    if original_cell != converted_cell:
                        # Count the number of HTML entities added
                        emoji_count += len(re.findall(r'&#\d+;', converted_cell))
                
                processed_rows.append(processed_row)
                
                # Progress indicator for large files
                if row_num % 100 == 0:
                    print(f"Processed {row_num} rows...")
        
        # Write the processed data to the output file
        with open(output_file, 'w', encoding='utf-8', newline='') as outfile:
            writer = csv.writer(outfile, delimiter=delimiter)
            writer.writerows(processed_rows)
        
        print(f"✅ Successfully converted {emoji_count} emojis to HTML entities!")
        print(f"📁 Input file: {input_file}")
        print(f"📁 Output file: {output_file}")
        print(f"📊 Processed {len(processed_rows)} rows")
        
        return True
        
    except Exception as e:
        print(f"❌ Error processing CSV file: {str(e)}")
        return False

def main():
    """Main function to handle command line arguments and run the conversion."""
    
    # Default file names
    input_file = "Fall-2025-UCC-Events.csv"
    output_file = "Fall-2025-UCC-Events_html_entities.csv"
    
    # Handle command line arguments
    if len(sys.argv) >= 2:
        input_file = sys.argv[1]
    if len(sys.argv) >= 3:
        output_file = sys.argv[2]
    
    print("🔄 Emoji to HTML Entity Converter")
    print("=" * 50)
    
    # Process the file
    success = process_csv_file(input_file, output_file)
    
    if success:
        print("\n🎉 Conversion completed successfully!")
        print(f"\nYou can now use '{output_file}' with HTML entities instead of emoji characters.")
    else:
        print("\n❌ Conversion failed. Please check the error messages above.")
        sys.exit(1)

if __name__ == "__main__":
    main()
